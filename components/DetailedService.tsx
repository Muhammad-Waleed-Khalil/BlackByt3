import React from 'react';
import { ServiceItem } from '../types';
import { Shield, Skull, Eye, AlertTriangle, Lock, Cpu, BookOpen, User } from 'lucide-react';

interface DetailedServiceProps {
  service: ServiceItem;
  index: number;
}

const DetailedService: React.FC<DetailedServiceProps> = ({ service, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield': return <Shield className="w-8 h-8" />;
      case 'skull': return <Skull className="w-8 h-8" />;
      case 'eye': return <Eye className="w-8 h-8" />;
      case 'alert': return <AlertTriangle className="w-8 h-8" />;
      case 'lock': return <Lock className="w-8 h-8" />;
      case 'chip': return <Cpu className="w-8 h-8" />;
      case 'book': return <BookOpen className="w-8 h-8" />;
      case 'user': return <User className="w-8 h-8" />;
      default: return <Shield className="w-8 h-8" />;
    }
  };

  return (
    <div className="relative border border-red-900/30 bg-black/60 p-8 hover:bg-red-950/5 hover:border-red-600 transition-all duration-300 group">
      {/* Top Bar Decals */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600/50 to-transparent" />
      <div className="absolute top-2 right-2 text-xs font-mono text-red-900 group-hover:text-red-500">
        SEC_LEVEL_0{index + 1}
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-red-900/20 rounded text-red-600 group-hover:text-white group-hover:bg-red-600 transition-colors">
          {getIcon(service.icon)}
        </div>
        <div>
          <h3 className="text-2xl font-['Unica_One'] text-white group-hover:text-red-500 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-gray-400 font-mono mt-1 border-l-2 border-red-900 pl-2">
            {service.description}
          </p>
        </div>
      </div>

      {service.fullDetails ? (
        <div className="space-y-4 mt-6 bg-black/40 p-4 border-t border-gray-800">
          <div className="grid grid-cols-[80px_1fr] gap-4">
            <span className="text-red-600 font-mono text-xs uppercase">What:</span>
            <p className="text-gray-400 text-sm font-mono">{service.fullDetails.what}</p>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-4">
            <span className="text-red-600 font-mono text-xs uppercase">How:</span>
            <p className="text-gray-400 text-sm font-mono">{service.fullDetails.how}</p>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-4">
            <span className="text-red-600 font-mono text-xs uppercase">Output:</span>
            <p className="text-white text-sm font-mono">{service.fullDetails.deliverable}</p>
          </div>
        </div>
      ) : (
        <ul className="space-y-2 mt-6">
          {service.details?.map((detail, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400 font-mono hover:text-white transition-colors">
              <span className="text-red-800">>></span>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetailedService;
