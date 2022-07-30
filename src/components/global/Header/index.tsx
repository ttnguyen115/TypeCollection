import Navigation from 'components/global/Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='sticky top-0 z-10 py-4 min-h-6 bg-gray-50'>
      <div className='flex flex-wrap items-center justify-between max-w-6xl px-4 mx-auto'>
        <h1 className='text-2xl font-semibold'>
          <Link to="/">Firebase</Link>
        </h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header