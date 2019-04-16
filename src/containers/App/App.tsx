import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DataTable, TableHeader } from 'react-mdl';
import Layout from '../../components/layouts/Layout';
import { AppState } from '../../redux/modules/reducer';
import * as user from '../../redux/modules/user';

type TOwnProps = {};
type TMergedProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & TOwnProps;

class App extends Component<TMergedProps, any> {
    render() {
        return (
            <div className="App">
                <Layout>
                    {this.props.user.count}
                    <button onClick={() => { this.props.updateCount({ count: ++this.props.user.count }) }}>increment</button>
                    <DataTable
                        shadow={0}
                        rows={[
                            { material: 'Acrylic (Transparent)', quantity: 25, price: 2.90 },
                            { material: 'Plywood (Birch)', quantity: 50, price: 1.25 },
                            { material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35 }
                        ]}
                    >
                        <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                        <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                        <TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
                    </DataTable>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (appState: AppState) => { return { user: appState.user, } }

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ updateCount: user.userActions.updateCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
