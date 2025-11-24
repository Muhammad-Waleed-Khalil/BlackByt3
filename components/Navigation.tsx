import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Briefcase, Target, Building } from 'lucide-react';
import { MEGA_MENU_CATEGORIES } from '../constants';

interface NavigationItem {
  id: string;
  label: string;
  description?: string;
}

interface SubCategory {
  title: string;
  items: NavigationItem[];
}

interface MegaMenuCategory {
  id: string;
  label: string;
  icon: string;
  subcategories: SubCategory[];
}

// Hover timing constants
const HOVER_OPEN_DELAY = 0; // Instant open
const HOVER_CLOSE_DELAY = 200; // 200ms delay before closing

// Debug logging function
const debugLog = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[MegaMenu Debug] ${message}`, data || '');
  }
};

const Navigation: React.FC = () => {
  // Basic state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Robust hover management
  const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({});
  const [closeTimeouts, setCloseTimeouts] = useState<Record<string, NodeJS.Timeout>>({});
  
  // Refs for DOM elements
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const bridgeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const location = useLocation();
  
  // Detect touch device for fallback behavior
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    
    // Keyboard event handling
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
        debugLog('Menu closed via Escape key');
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown]);

  // Icon mapping function
  const getIconComponent = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase {...iconProps} />;
      case 'Target':
        return <Target {...iconProps} />;
      case 'Building':
        return <Building {...iconProps} />;
      default:
        return <Building {...iconProps} />;
    }
  };

  // Robust hover management functions
  const clearHoverTimeout = useCallback((categoryId: string) => {
    const timeout = closeTimeouts[categoryId];
    if (timeout) {
      clearTimeout(timeout);
      setCloseTimeouts(prev => {
        const newTimeouts = { ...prev };
        delete newTimeouts[categoryId];
        return newTimeouts;
      });
      debugLog(`Cleared timeout for ${categoryId}`);
    }
  }, [closeTimeouts]);

  const setHoverCloseTimeout = useCallback((categoryId: string) => {
    clearHoverTimeout(categoryId);
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      debugLog(`Auto-closed menu for ${categoryId} after timeout`);
    }, HOVER_CLOSE_DELAY);
    
    setCloseTimeouts(prev => ({
      ...prev,
      [categoryId]: timeout
    }));
    debugLog(`Set close timeout for ${categoryId} (${HOVER_CLOSE_DELAY}ms)`);
  }, [clearHoverTimeout]);

  const handleTriggerEnter = useCallback((categoryId: string) => {
    debugLog(`Trigger enter for ${categoryId}`);

    // Close any currently open dropdown immediately when hovering to a new one
    if (activeDropdown && activeDropdown !== categoryId) {
      setActiveDropdown(null);
      debugLog(`Immediately closed ${activeDropdown} when hovering to ${categoryId}`);
    }

    // Clear ALL existing timeouts to prevent conflicts
    Object.keys(closeTimeouts).forEach(timeoutKey => {
      clearHoverTimeout(timeoutKey);
    });

    // Open the new menu
    setHoverStates(prev => ({ ...prev, [categoryId]: true }));
    setActiveDropdown(categoryId);
  }, [activeDropdown, clearHoverTimeout, closeTimeouts]);

  const handleTriggerLeave = useCallback((categoryId: string) => {
    debugLog(`Trigger leave for ${categoryId}`);
    setHoverStates(prev => ({ ...prev, [categoryId]: false }));
    setHoverCloseTimeout(categoryId);
  }, [setHoverCloseTimeout]);

  const handleMenuEnter = useCallback((categoryId: string) => {
    debugLog(`Menu enter for ${categoryId}`);
    clearHoverTimeout(categoryId);
    setHoverStates(prev => ({ ...prev, [`${categoryId}-menu`]: true }));
    setActiveDropdown(categoryId);
  }, [clearHoverTimeout]);

  const handleMenuLeave = useCallback((categoryId: string) => {
    debugLog(`Menu leave for ${categoryId}`);
    setHoverStates(prev => ({ ...prev, [`${categoryId}-menu`]: false }));
    setHoverCloseTimeout(categoryId);
  }, [setHoverCloseTimeout]);

  const handleBridgeEnter = useCallback((categoryId: string) => {
    debugLog(`Bridge enter for ${categoryId}`);
    clearHoverTimeout(categoryId);
    setHoverStates(prev => ({ ...prev, [`${categoryId}-bridge`]: true }));
    setActiveDropdown(categoryId);
  }, [clearHoverTimeout]);

  const handleBridgeLeave = useCallback((categoryId: string) => {
    debugLog(`Bridge leave for ${categoryId}`);
    setHoverStates(prev => ({ ...prev, [`${categoryId}-bridge`]: false }));
    setHoverCloseTimeout(categoryId);
  }, [setHoverCloseTimeout]);

  // Touch device click handling - fallback for devices without hover
  const handleTriggerClick = useCallback((categoryId: string) => {
    if (isTouchDevice) {
      // Touch devices: Click to toggle menu
      if (activeDropdown === categoryId) {
        setActiveDropdown(null);
        debugLog(`Touch: Closed menu for ${categoryId}`);
      } else {
        setActiveDropdown(categoryId);
        debugLog(`Touch: Opened menu for ${categoryId}`);
      }
    }
    // Desktop devices: Ignore click events, use hover only
  }, [activeDropdown, isTouchDevice]);

  // Focus management for accessibility
  const handleTriggerFocus = useCallback((categoryId: string) => {
    debugLog(`Trigger focused for ${categoryId}`);
    setActiveDropdown(categoryId);
  }, []);

  const handleTriggerBlur = useCallback((categoryId: string) => {
    debugLog(`Trigger blurred for ${categoryId}`);
    // Don't auto-close on blur, wait for mouse leave or escape
  }, []);

  // Cleanup function for all timeouts and event listeners
  useEffect(() => {
    return () => {
      // Clear all close timeouts on unmount
      Object.values(closeTimeouts).forEach(timeout => {
        clearTimeout(timeout);
      });
      debugLog('Cleaned up all hover timeouts on unmount');
    };
  }, [closeTimeouts]);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const target = event.target as Element;
        const currentMenu = menuRefs.current[activeDropdown];
        const currentTrigger = triggerRefs.current[activeDropdown];
        
        if (currentMenu && !currentMenu.contains(target) && 
            currentTrigger && !currentTrigger.contains(target)) {
          setActiveDropdown(null);
          debugLog('Menu closed via outside click');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleNavigation = (path: string) => {
    // First close the dropdowns
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);

    // Use timeout to ensure dropdown is closed before navigation
    setTimeout(() => {
      // Use window.location.href for reliable navigation
      window.location.href = `/${path}`;
      debugLog(`Navigated to ${path} and closed menu`);
    }, 10);
  };

  const handleDropdownToggle = (categoryId: string) => {
    const newState = activeDropdown === categoryId ? null : categoryId;
    setActiveDropdown(newState);
    debugLog(`Toggle menu for ${categoryId}: ${newState ? 'open' : 'closed'}`);
  };

  const getCurrentPageLabel = () => {
    const currentPath = location.pathname.slice(1) || 'home';
    // Find the current page in mega menu structure
    for (const category of MEGA_MENU_CATEGORIES) {
      for (const subcategory of category.subcategories) {
        const item = subcategory.items.find(item => item.id === currentPath);
        if (item) {
          return `${category.label} > ${item.label}`;
        }
      }
    }
    return 'BLACK BYT3';
  };

  const isActiveRoute = (itemId: string) => {
    return location.pathname === `/${itemId}` || (location.pathname === '/' && itemId === 'home');
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavigation('home')}
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src="/Logo.png"
                  alt="BLACK BYT3"
                  className="h-14 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation - Mega Menu - Centered */}
            <div className="hidden lg:block flex-1">
              <div className="flex items-center justify-center space-x-2">
                {MEGA_MENU_CATEGORIES.map((category) => (
                  <div key={category.id} className="relative group">
                    {/* Navigation Trigger Button */}
                    <button
                      ref={(el) => { triggerRefs.current[category.id] = el; }}
                      onMouseEnter={() => handleTriggerEnter(category.id)}
                      onMouseLeave={() => handleTriggerLeave(category.id)}
                      onFocus={() => handleTriggerFocus(category.id)}
                      onBlur={() => handleTriggerBlur(category.id)}
                      onClick={() => handleTriggerClick(category.id)}
                      className="flex items-center space-x-2 px-4 py-2 text-sm font-mono text-gray-300 hover:text-red-500 hover:bg-red-900/20 rounded-lg transition-all duration-200 group"
                      aria-expanded={activeDropdown === category.id}
                      aria-haspopup="true"
                      aria-controls={`mega-menu-${category.id}`}
                    >
                      {getIconComponent(category.icon)}
                      <span className="hidden xl:inline">{category.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === category.id ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Invisible Bridge - Prevents gaps between trigger and menu */}
                    <div
                      ref={(el) => { bridgeRefs.current[category.id] = el; }}
                      className="absolute top-full left-0 right-0 h-3 z-10"
                      onMouseEnter={() => handleBridgeEnter(category.id)}
                      onMouseLeave={() => handleBridgeLeave(category.id)}
                      style={{ pointerEvents: 'auto' }}
                      aria-hidden="true"
                    />

                    {/* Mega Menu Dropdown */}
                    {activeDropdown === category.id && (
                      <div
                        ref={(el) => { menuRefs.current[category.id] = el; }}
                        id={`mega-menu-${category.id}`}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-4xl bg-black/95 backdrop-blur-lg border border-red-900/50 rounded-b-2xl shadow-2xl z-20"
                        onMouseEnter={() => handleMenuEnter(category.id)}
                        onMouseLeave={() => handleMenuLeave(category.id)}
                        style={{ pointerEvents: 'auto' }}
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <div key={subIndex} className="space-y-3">
                                <h3 className="text-xs font-mono text-red-600 uppercase tracking-wider border-b border-red-900/30 pb-2">
                                  {subcategory.title}
                                </h3>
                                <div className="space-y-2">
                                  {subcategory.items.map((item) => (
                                    <button
                                      key={item.id}
                                      onClick={() => handleNavigation(item.id)}
                                      onMouseEnter={(e) => {
                                        // Prevent rapid toggling when hovering menu items
                                        e.stopPropagation();
                                      }}
                                      className={`block w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                                        isActiveRoute(item.id) 
                                          ? 'bg-red-900/30 text-red-400' 
                                          : 'text-gray-400 hover:text-red-500 hover:bg-red-900/10'
                                      }`}
                                      role="menuitem"
                                      tabIndex={-1}
                                    >
                                      <div className="font-mono text-sm font-medium">{item.label}</div>
                                      {item.description && (
                                        <div className="text-xs text-gray-600 mt-1 group-hover:text-gray-400">
                                          {item.description}
                                        </div>
                                      )}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-red-900/30">
            <div className="px-4 py-4 space-y-4 max-h-96 overflow-y-auto">
              {MEGA_MENU_CATEGORIES.map((category) => (
                <div key={category.id} className="space-y-2">
                  <div className="flex items-center space-x-2 text-red-600 font-mono text-sm uppercase tracking-wider">
                    {getIconComponent(category.icon)}
                    <span>{category.label}</span>
                  </div>
                  
                  <div className="ml-6 space-y-1">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex} className="space-y-1">
                        <div className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                          {subcategory.title}
                        </div>
                        {subcategory.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleNavigation(item.id)}
                            className={`block w-full text-left p-2 text-sm rounded transition-colors ${
                              isActiveRoute(item.id) 
                                ? 'text-red-400 bg-red-900/20' 
                                : 'text-gray-400 hover:text-red-500 hover:bg-red-900/10'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Current Page Indicator */}
      <div className="fixed top-16 left-4 z-40 bg-black/80 backdrop-blur-sm border border-red-900/50 rounded-lg px-3 py-2">
        <div className="text-red-600 font-mono text-xs tracking-wider">
          {getCurrentPageLabel()}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-16 right-4 z-40">
        <div className="bg-black/80 backdrop-blur-sm border border-red-900/50 rounded-lg px-3 py-2">
          <div className="text-red-600 font-mono text-xs tracking-wider">
            SCROLL_PROGRESS: {Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
