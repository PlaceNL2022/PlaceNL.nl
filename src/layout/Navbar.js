import { Link, NavLink } from 'react-router-dom';

export default () => <div className='bg-gray-800 p-2 sm:flex gap-2 w-full'>
    <div className='flex-auto'>
        <Link to='/' className='hover:bg-gray-700 p-2 flex w-max'>
            <img src='/logo512.png' width={28} alt='' />&nbsp;Place NL
        </Link>
    </div>
    <div className='flex-auto flex justify-end gap-2'>
        {navLink('/timeline', 'Tijdlijn')}
        {navLink('/orderhistory', 'Templates')}
    </div>
</div>;

function navLink(link, content) {
    return <NavLink to={link} className={({ isActive }) => `${(isActive ? 'bg-gray-600' : 'hover:bg-gray-700')} p-2 flex w-max`}>{content}</NavLink>;
}
