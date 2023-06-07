import Cover from "../../../ReuseCompo/Cover/Cover";
import orderImg from '../../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../CustomHook/useMenu/useMenu";
import ShopTabs from "../Tabs/ShopTabs";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Shop = () => {
    const categories = ['Salad', 'Pizza', 'Soup', 'Dessert', 'Drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === 'Salad');
    const pizzas = menu.filter(item => item.category === 'Pizza');
    const soups = menu.filter(item => item.category === 'Soup');
    const desserts = menu.filter(item => item.category === 'Dessert');
    const drinks = menu.filter(item => item.category === 'Drinks');
    return (
        <div className="bg-white">
            <Helmet>
                <title>Order Now || Red Gold Restaurants</title>
            </Helmet>
            <Cover
                coverImg={orderImg}
                coverHeader={"OUR SHOP"}
                text={"would you like to a dish"}
            />

            <div className="py-20 w-fit mx-auto text-xl uppercase font-bold text-orange-500 text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel><ShopTabs items={salads} /></TabPanel>
                    <TabPanel><ShopTabs items={pizzas} /></TabPanel>
                    <TabPanel><ShopTabs items={soups} /></TabPanel>
                    <TabPanel><ShopTabs items={desserts} /></TabPanel>
                    <TabPanel><ShopTabs items={drinks} /></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;