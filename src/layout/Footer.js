import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';

export default () => <div className='bg-gray-800 p-5 sm:flex gap-2 absolute bottom-0 w-full'>
    <div className='flex-auto'>
        <span>&copy; 2022 PlaceNL </span>
        <span className='text-gray-400'><br className='sm:hidden' />Design door <a href='https://github.com/NoahvdAa' target='_blank' rel='noreferrer'>Noah van der Aa</a></span>
    </div>
    <div className='flex-auto text-center sm:text-right text-xl'>
        <a href='https://github.com/PlaceNL' target='_blank' rel='noreferrer' className='pr-2'><FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://discord.gg/PlaceNL' target='_blank' rel='noreferrer' className='pr-2'><FontAwesomeIcon icon={faDiscord} /></a>
        <a href='https://reddit.com/r/PlaceNL' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faReddit} /></a>
    </div>
</div>;
