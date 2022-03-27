import { GetStaticProps } from "next";
import { Country } from "../interfaces/Country";

type Props = {
    data: Country[]
}
const Dashboard = ({ data }: Props) => {
    return (
        <div>
            <ul>
                {data.map((info) => (
                    <li key={info.id}>{info.date}</li>
                ))}
            </ul>
        </div>
    )
}

//Funtion that is called at build time
export const getStaticProps: GetStaticProps = async () => {
    // Call an external API endpoint to get posts
    const res = await fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            'X-RapidAPI-Key': '4da9958ed9mshb8b21113a3df19fp1d7951jsn0f79d5ded190'
        }
    })
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default Dashboard