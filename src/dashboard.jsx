// import { Menu } from "./Menu";
import { Menu } from "./Menu";
import { useState, useEffect } from "react";
import { Tabs } from '@mantine/core';
import { Questionnaire } from "./questionnaire";
import { Link } from "react-router-dom";
import axios from "axios";
import { IconBrandShopee } from "@tabler/icons-react";
import { Text, Group, Title } from "@mantine/core"


// const TABNAMES = {
//     MY_LISTINGS: "My Listings",
//     MY_COLLECTIONS: "My Collections",
// };

export function Dashboard({ token }) {
    const [myitems, setMyItems] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get("https://ai-shopping-app-express.onrender.com/items", {
            headers: {
                authorization: `x-access-token ${token}`
            }
        }).then((res) => {
            setMyItems(res.data.items)
        })
            .catch(error => setError(`Error, ${error.message}`))
    }, [token])


    return (
        <>
            {error ? <Text c="red">{error}</Text> :
                <div>
                    {/* The Group Below is the HomePare Title and Logo */}
                    <Group>
                        <Menu></Menu>
                        <IconBrandShopee color="var(--mantine-color-dark-4)" size={48} />
                        <Title c="var(--mantine-color-dark-4)" order={1} fw="900">
                            Panini<Text span c="#00A6BA" inherit>Market</Text>
                        </Title>
                    </Group>

                    <p>hello!!</p>
                </div>
            }
        </>

    );
}