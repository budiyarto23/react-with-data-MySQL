import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = { listPopok: [ ]}
  
  componentDidMount() {
    axios.get('http://localhost:2002/popok', {
      params: {
        nama: 'wohoo'
        // sebenarnya tidak terlalu berpengaruh
      }
      }).then((res) => {
        this.setState({ listPopok: res.data })
      })
  }

  onBtnAddClick = () => {
    axios.post('http://localhost:2002/popok', {
      nama: 'wohoo',
      harga: 1000,
      deskripsi: 'aku anak ampas sehat tubuhku juga kuat dong',
      image: 'NaN',
      brandid: 10,
      filterNama: 'wohoo'
      // filterNama berfungsi untuk menfilter nama yang akan dimunculkan
      
    }).then(res => {
      this.setState({ listPopok: res.data })
    }).catch(err => {
      console.log(err);
    })
  }

  onBtnDeleteClick = () => {
    axios.delete('http://localhost:2002/popok/waduh')
      .then(res => {
        if (window.confirm('delete success vrooh') === true) {
          console.log('Item sudah dihapus')
        } else {
          console.logs('Item belum terhapus')
        }
      })
  }

  onBtnPutClick = () => {
    axios.put('http://localhost:2002/popok/3')
      .then(res => {
        console.log("success");
      })
    }

  renderListPopok = () => {
    var arrJSX = this.state.listPopok.map((item) => {
      return (
        <div>
          <h1>{item.nama}</h1>
          <h3>{item.harga}</h3>
          <p>{item.deskripsi}</p>
          <p>{item.image}</p>
          <p>{item.brandid}</p>
        </div>
      )
    })
    return arrJSX;
  }

  render() {
    return (
      <div>
        {this.renderListPopok()}
        <input type="button" value="klik disini!" onClick={this.onBtnDeleteClick} />
        <input type="button" value="klik disini!" onClick={this.onBtnPutClick} />
        <input type="button" value="klik disini!" onClick={this.onBtnAddClick}/>
      </div>
    );
  }
}

export default App;

