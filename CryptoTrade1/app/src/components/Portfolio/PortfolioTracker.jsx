import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import portfoliosData from '../../data/portfolios';
import PortfolioTotalAssert from './PortfolioTotalAssert'
import PortfolioBaseStatistics from './PortfolioBaseStatistics'
import PortfolioMainInfo from './PortfolioMainInfo'
import PortfolioMain from './PortfolioMain'
import { fetchCoinsData } from "../../services/getCoinsApi";
import { assertProcessing } from "../../services/AssertProcessing";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{ width: '100%' }}
            sx={{}}
            size="lg"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}

        >
            {value === index && (
                <Box sx={{ p: 3, backgroundColor: 'rgba(255, 255, 255, 0)', width: 'xl', maxWidth: 'xl', minWidth: 'xl' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function PortfolioTracker({ userProfile }) {
    const [value, setValue] = React.useState(0);
    const [portfolios, setPortfolios] = React.useState([]);
    const [userPortfolios, setUserPortfolios] = React.useState([]);
    const [coins, setCoins] = React.useState([]);



    React.useEffect(() => {

        const fetchData = async () => {
            const coinsData = await fetchCoinsData();
            setCoins(coinsData);
            console.log("Завантаження даних про монети");
        };

        fetchData();
        //Перевірка чи userProfile має значення
        if (userProfile && userProfile.login) {
            // Фільтрація портфелів за автором з userProfile
            const filteredPortfolios = portfoliosData.filter(
                (portfolio) => portfolio.author === userProfile.login
            );
            setUserPortfolios(filteredPortfolios);
        }

    }, [userProfile]); // Вказуємо userProfile як залежність



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className=" md:w-max mx-auto  w-full justify-center items-center pb-24  mt-24 px-10 tracking-wider">


            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.inherit', display: 'flex', minHeight: 500, width: 'xl', maxWidth: 'xl', minWidth: 'xl' }}
            >
                <Tabs className='text-white'
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    textColor="inherit"
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    sx={{ borderRight: 1, borderColor: '#757575', width: '150px', maxWidth: '150px', minWidth: '150px' }}
                >


                    {userPortfolios.map((portfolio, index) => (
                        <Tab key={portfolio.id} label={portfolio.name} {...a11yProps(index)} />
                    ))}

                    <button className='text-pink-500 mt-5 flex flex-row items-center text-center justify-center'>
                        <p className='text-4xl mr-1'>
                            +
                        </p>
                        <div className='text-sm font-bold'>
                            <p>CREATE</p>
                            <p>PORTFOLIO</p>
                        </div>
                    </button>
                </Tabs>
                {userPortfolios.map((portfolio, index) => (
                    <TabPanel

                        key={portfolio.id}
                        value={value}
                        index={index}
                        className='text-white'
                        sx={{ width: 'xl', maxWidth: 'xl', minWidth: 'xl' }}
                    >
                        <div>

                            <PortfolioMain portfolio={portfolio} coins={coins} />
                            {/* <PortfolioMainInfo portfolio={portfolio} />
                            <PortfolioBaseStatistics />
                            <PortfolioTotalAssert portfolio={portfolio} coins={coins} /> */}

                        </div>



                    </TabPanel>
                ))}
            </Box>
            {userPortfolios.length === 0 && (
                <button onClick>Створити нове портфоліо</button>
            )}
        </div>

    );
}
