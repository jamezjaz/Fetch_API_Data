import React from 'react'

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then(data => {
        // console.log('Data', data);
        this.setState({
          isLoaded: true,
          items: data
        });
        console.log('Fetch Data', data);
      });
  }

  render() {
    const { items } = this.state;
    // const returnedArray = Array.from(items)
    // console.log('Hellloo', returnedArray);
    console.log('Something', items.data);
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
        return(
        <div>
            <h2>Return something</h2>
            <ul>
            {items.data.map(item => (
            <li key={item.id}>
                <p>{item.first_name}</p>
                <p>{item.last_name}</p>
                <p>{item.email}</p>
            </li>
            ))}
            </ul>
        </div>
        );
    }
  }
};

export default Data;