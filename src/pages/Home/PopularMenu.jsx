import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('../../../public/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, []);

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            />
            <div className="grid grid-cols-2 gap-10">
                {
                    menu.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}>
                        </MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn bg-transparent border-b-2 border-0 border-black mt-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;