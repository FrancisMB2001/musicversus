import logo from '../assets/MVS_logo_background.png';

export default function Navbar() {
    return (
        <header className="bg-gray-900">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1 flex-row flex">
                    <img className="logo h-10 max-w-xs object-contain" src={logo} alt="MusicVersus logo" />
                    <a className="btn btn-ghost text-xl"><span className='text-primary'>Music</span><span className='text-secondary'>Versus</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Custom Playlist</a></li>
                        <li><a>Top Charts</a></li>
                        <li><a>About</a></li>
                        {/*
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                        */}
                    </ul> 
                </div>
            </div>
        </header>
    );
}