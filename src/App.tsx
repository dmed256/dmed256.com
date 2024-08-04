import wallpaper from '@assets/wallpaper.png?url';
import { OsHeader } from '@/OsHeader';
import { Terminal } from '@/Terminal';

export const App = () => {
  return (
    <div
      className="flex-1 flex flex-col m-2 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
      }}
    >
      <OsHeader />
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <Terminal />
      </div>
    </div>
  );
};
