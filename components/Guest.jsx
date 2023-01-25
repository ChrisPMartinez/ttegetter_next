import { useState, useEffect } from 'react'
import algoliasearch from 'algoliasearch'
import styles from "@/styles/Guest.module.scss"

//Algolia Search is initialized with the application ID and API key.
//Tabletop.Events lists theirs in their developer documentation: https://tabletop.events/developer/Event.html#Search_Events
const searchClient = algoliasearch(process.env.NEXT_PUBLIC_TTE_APP_ID, process.env.NEXT_PUBLIC_TTE_API_KEY)

//Set the convention variable by getting the convention ID from Tabletop.Events and appending '_events' onto the end
//Check the Readme.md on how I go about getting the convention ID, but there may be a better way
const convention = searchClient.initIndex(process.env.NEXT_PUBLIC_TTE_CON_INDEX)


export default ({ guestName, alternateName }) => {

    const [guestEvents, setGuestEvents] = useState([])

    async function getGuestEvents() {
        let query = guestName
        if (alternateName) { query = alternateName }

        await convention.search(query).then(({ hits }) => {
            setGuestEvents(hits);
        })
    }

    useEffect(() => {
        getGuestEvents()
    })

    return (
        guestEvents.length > 0 &&
        <div className={styles.guest}>
            <h1>{guestName + '\'s events'}</h1>
            {guestEvents.map((guestEvent) => (
                <div className={styles.card}>
                    <a
                        href={"https://tabletop.events" + guestEvent.view_uri}
                        target="_blank">
                        <h2>
                            {guestEvent.name}
                        </h2>
                        {guestEvent.remaining_tickets == 0
                            ? <p className={styles.warning}>SOLD OUT</p>
                            : <p className={styles.slots}>{guestEvent.remaining_tickets} slots remaining</p>
                        }
                        <p>{guestEvent.startdaypart_name}</p>
                        <p>
                            {guestEvent.host_name.map(function (host, i) {
                                if (i + 1 == guestEvent.host_name.length) {
                                    return (
                                        host
                                    )
                                }
                                else return (
                                    host + ', '
                                )
                            })}
                        </p>
                    </a>
                </div>
            ))}
        
        </div>
    )
}