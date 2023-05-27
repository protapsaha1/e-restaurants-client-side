import poster from '../../../../assets/home/chef-service.jpg'
import PosterCom from '../../../ReuseCompo/PosterCom/PosterCom';


const Poster = () => {
    return (
        <div className='py-10'>
            <PosterCom
                img={poster}
                posterHeading={"Red gold sun e-restaurants"}
                text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam fugiat, necessitatibus perferendis consectetur consequuntur sed corporis quibusdam iure deleniti blanditiis."}
            />
        </div>
    );
};

export default Poster;