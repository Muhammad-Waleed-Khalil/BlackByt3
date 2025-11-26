# Website Changes Required - Black Byt3

## 1. GLOBAL CHANGES

### Typography
- [ ] **Increase font size for ALL headings** across the website
- [ ] **Make headings bolder** (increase font-weight)

### Browser Title
- [ ] Change browser tab title from "BLACK BYT3 // SECURE SYSTEM" to "Black Byt3 Cyber Space"

---

## 2. CTF & CTF TEAM SECTION

### Team Members Update
- [ ] **REMOVE** current CTF team members:
  - Muhammad Naqar (Team Lead)
  - Shamir Khan (Web Exploitation)
  - Ammar Hanif (Red Team)
  - Saad Khan (AI/ML)
  - Jafar Ali (Hardware)
  - Hisbullah (Forensics)

- [ ] **ADD** new CTF team members:
  1. **Mian Hisbullah** (Captain)
  2. **Raza Ellahi**
  3. **Asees Shah**
  4. **Samia Sultan**
  5. **Asfandyar Javid**

- [ ] **Add LinkedIn profile links** for each team member

---

## 3. ACTIVE OPERATORS SECTION

### Section Rename & Updates
- [ ] **REMOVE** section title "Active Operators"
- [ ] **RENAME** to either:
  - Option 1: **"Meet Our Team"**
  - Option 2: **"Mind Behind Black Byt3"**

- [ ] **Add social profiles** for each team member:
  - LinkedIn profile links
  - GitHub profile links

---

## 4. CTF PLAYERS SECTION

- [ ] **REMOVE** this entire section
  - Note: The CTF team members added above will automatically display here

---

## 5. OCMP → BLACK HOL3 REBRANDING

### All References (Global Change)
- [ ] Change **ALL instances** of "OCMP" to **"Black Hol3"** throughout the website

### Description Update
- [ ] Update description to:
  > **Black Hol3: Personalized mentorship with hands-on training, project guidance, and career planning sessions.**

### Add Mentorship Programs Under Black Hol3
- [ ] **BCOP** - Cyber Security Mastery One-To-On Mentorship
- [ ] **BCAP** - Pratical AWS Master One-To-On Mentorship
- [ ] **The Hacker's Approach to Machine Learning**

---

## 6. ACADEMY SECTION (https://www.blackbyt3.com/academy)

### Section Title Update
- [ ] Change "OCMP (1:1 MENTORSHIP)" to **"Black Hol3 (1 to 1 Mentorship)"**

### Course Catalog Updates

#### Course 1: Practical AWS Certified
- [ ] Update duration from **6 weeks** to **12 weeks**
- [ ] Keep all other details the same

#### Course 2: Machine Learning Certified - A Hacker Way
- [ ] Update duration to **12 weeks**
- [ ] Keep all other details the same

#### Course 3: Cyber Security Mastery (OCMP)
- [ ] Change name to **"Certified Offensive Practitioner"**
- [ ] Update duration to **12 weeks**
- [ ] Update price to **$250**
- [ ] Reference for more details: [Google Doc](https://docs.google.com/document/d/1pd3tVqAlNlkvdp-uS0RAYdz-7J9K7NZCe_n1_6fp8y0/edit?tab=t.0#heading=h.sewaqdnl3itv)

---

## 7. BLACK LAB - OPEN SOURCE TOOLS SECTION (https://www.blackbyt3.com/projects)

### Add New GitHub Projects
- [ ] Add project: [SubEnum Tool](https://github.com/MushaibAhmed/subenum-tool)
- [ ] Add project: [ChromePass Harvester](https://github.com/HusnainZargar/ChromePass-Harvester)

---

## IMPLEMENTATION CHECKLIST

### Priority 1: High Priority Changes
- [ ] Global font size and weight changes for headings
- [ ] CTF Team members update with LinkedIn profiles
- [ ] OCMP → Black Hol3 rebranding (all instances)
- [ ] Academy section course updates (durations and pricing)

### Priority 2: Medium Priority Changes
- [ ] Active Operators section rename and social links
- [ ] Remove CTF Players section
- [ ] Browser title update

### Priority 3: Content Additions
- [ ] Add GitHub and LinkedIn profiles to team members
- [ ] Add new open source tools to Black Lab section
- [ ] Add new mentorship program descriptions

---

## NOTES FOR IMPLEMENTATION

1. **LinkedIn & GitHub Profiles**: Ensure you have the correct profile URLs for all team members before implementing
2. **Black Hol3 Consistency**: Make sure the rebranding is consistent across:
   - Main page
   - Academy page
   - Navigation menus
   - Meta descriptions
   - Any promotional materials
3. **Course Details**: Refer to the Google Doc for detailed course curriculum and descriptions
4. **GitHub Tools**: Fetch repository data (stars, description, etc.) from the GitHub API for better presentation

---

## FILES LIKELY TO BE MODIFIED

Based on the codebase structure, these files may need updates:
- `/pages/index.tsx` or main homepage component
- `/pages/academy.tsx` or academy page component
- `/pages/projects.tsx` or projects/Black Lab page
- Team/CTF related components
- Any global typography/theme configuration files
- Meta/SEO components for browser title

---

**Last Updated**: 2025-11-26
**Status**: Pending Implementation
