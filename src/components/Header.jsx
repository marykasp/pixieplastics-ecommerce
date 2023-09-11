import { useContext } from 'react';

import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  return (
    <header className="bg-primary flex items-center justify-between">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
