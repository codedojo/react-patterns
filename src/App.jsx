import React from 'react';

import Tabs from './components/Tabs';

export default class App extends React.Component {
    render() {
        return (
            <Tabs>
                <Tabs.Tab title="Tab 1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis, et laudantium facere dolorum iure at quia voluptas sit non, quas, autem praesentium tempore reprehenderit dolor numquam accusantium similique id?
                </Tabs.Tab>

                <Tabs.Tab title="Tab 2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis quam odit rem magnam! Numquam necessitatibus dolore eius non in nemo ut nulla harum sit voluptates, tempora ipsum aut vitae!
                </Tabs.Tab>

                <Tabs.Tab title="Tab 3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis ad nemo quae voluptates unde natus amet error mollitia, aut consectetur minima sunt! Atque, maiores excepturi! Quis cumque facere dolores.
                </Tabs.Tab>
            </Tabs>
        );
    }
}