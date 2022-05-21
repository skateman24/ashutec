import { useState } from 'react';
import './Navigation.css';


function RightNav(props) {
    const [show, setshow] = useState(false);

    const handleclick = () => {
        setshow(!show);
    }
    return (
        <div className='Navbar'>
            <div className='NavTitle'>
                <div className='Navicon_Container' onClick={handleclick}>
                    {!show ?
                        <>
                            <div className='Navicon'></div>
                            <div className='Navicon'></div>
                            <div className='Navicon'></div>
                        </>
                        :
                        <div>X</div>
                    }

                </div>
                <div className='Titlecard'>Shoping Cart</div>
            </div>

            <div className='Nav_Subcontainer'>
                {show ?
                    <div className='SideBar'>
                        <div>Home</div>
                        <div>Trash</div>
                    </div>
                    : null
                }
                <div className='Category_Bar'>
                    <div className='CBTitle'>CATEGORY</div>
                    {props.category.map((e, i) => {
                        return (
                            <div className='CB_List'>
                                {e.Status ? <span className='CBL_Tick'></span> : null }
                                {e.name}
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )

}

export default RightNav;