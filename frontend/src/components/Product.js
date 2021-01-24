import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            products: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:8000/api/prueba/product')
            .then(res => res.json())
            .then(json => {
                this.setState([
                    {products: json},
                    {isLoaded: true}, 
                ])
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, products } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {products.map(product => (
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">{product.category}</strong>
                                <h3 className="mb-0">{product.name}</h3>
                                <p className="card-text mb-auto">{product.price}</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img width="200" height="250" src={product.url_image} alt='thumbnail' />
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;

