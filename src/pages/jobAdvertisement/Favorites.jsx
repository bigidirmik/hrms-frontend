import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function Favorites() {

    return (
        <div>
            <Dropdown pointing="top right" style={{marginTop:"1.3em"}} text="Favorites" icon="heart">
                <Dropdown.Menu>
                    <Dropdown.Item>
                        İTEM
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/favorite-detail" >Favorilere Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
