//import images
import airbnb from "../../assets/images/companies/airbnb.svg";
import mailchimp from "../../assets/images/companies/mailchimp.svg";
import reddit from "../../assets/images/companies/reddit.svg";
import amzon from "../../assets/images/companies/amazon.svg";
import adobPhotoshop from "../../assets/images/companies/adobe-photoshop.svg";
import line from "../../assets/images/companies/line.svg";


const jobVacancyData = [
    {
        id: 1,
        img: airbnb,
        title: "Project Manager",
        country: " California",
        vacancy: 8
    },
    {
        id: 2,
        img: mailchimp,
        title: "Marketing Director",
        country: "Danemark",
        vacancy: 12
    },
    {
        id: 3,
        img: reddit,
        title: "Product Designer",
        country: "France",
        vacancy: 25
    },
    {
        id: 4,
        img: amzon,
        title: "Magento Developer",
        country: "Hong-Kong",
        vacancy: 8
    },
    {
        id: 5,
        img: adobPhotoshop,
        title: "Product Sales Specialist",
        country: " Louisiana",
        vacancy: 1
    },
    {
        id: 6,
        img: line,
        title: "Business Associate",
        country: " Phoenix",
        vacancy: 15
    },
];

const statistic_data = {
    year: {
        companay: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84],
        newjobs: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78],
        totaljobs: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        jobview: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        label: ['01/01/2023', '02/01/2022', '03/01/2021', '04/01/2020', '05/01/2019', '06/01/2018', '07/01/2017',
            '08/01/2016', '09/01/2015', '10/01/2014', '11/01/2013']
    },
    month: {
        companay: [25, 95, 87, 14, 56, 12, 14, 56, 35, 14, 25],
        newjobs: [85, 87, 56, 45, 14, 87, 56, 98, 19, 51, 78, 49],
        totaljobs: [85, 75, 95, 48, 59, 68, 15, 35, 26, 45, 59, 57],
        jobview: [78, 89, 84, 98, 67, 59, 48, 42, 35, 29, 18, 59],
        label: ['01/01/2022', '02/02/2022', '03/03/2022', '04/04/2022', '05/05/2022', '06/06/2022', '07/07/2022',
            '08/08/2022', '09/09/2022', '10/10/2022', '11/11/2022']
    },
    week: {
        companay: [30, 48, 28, 74, 39, 87, 54],
        newjobs: [52, 43, 69, 75, 49, 28, 56],
        totaljobs: [57, 49, 68, 87, 71, 29, 49],
        jobview: [78, 84, 95, 76, 68, 57, 48],
        label: ['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022']
    }
};


export { jobVacancyData, statistic_data };