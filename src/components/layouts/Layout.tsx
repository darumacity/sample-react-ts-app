import React, { Children } from 'react';
import { Layout, Header, Content } from 'react-mdl';

export type TOwnProps = {};

export default (props => (
    <Layout fixedHeader>
        <Header title="Title">
        </Header>
        <Content>
            {props.children}
        </Content>
    </Layout>
)) as React.SFC<TOwnProps>;
