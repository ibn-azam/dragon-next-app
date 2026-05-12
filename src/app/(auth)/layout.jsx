import Navbar from '@/components/shared/Navbar';
import { montserrat } from '../layout';

const Authlayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar/>
            {children}
        </div>
    );
};

export default Authlayout;