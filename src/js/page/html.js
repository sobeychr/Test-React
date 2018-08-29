import React from 'react';
import Header from './../component/global/header';

class Html extends React.Component {
    render() {
        return (
            <div>
                <Header pageName="Html" />
                <main className="main">
                    <h1>Future page to auto-indent HTML text</h1>
                    <h2>From</h2>
                    <pre>
                        &lt;a href="testLink" class="testClass"
                        data-test="testValue"&gt;test&lt;/a&gt;
                    </pre>
                    <h3>To</h3>
                    <pre>
                        &lt;a href="testLink"
                        {'\n   '}
                        class="testClass"
                        {'\n   '}
                        data-test="testValue"&gt;
                        {'\n   '}
                        test
                        {'\n'}
                        &lt;/a&gt;
                    </pre>
                </main>
            </div>
        );
    }
}

export default Html;
