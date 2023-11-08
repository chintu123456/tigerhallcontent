import React, {useState} from 'react';
import { debounce } from 'lodash';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Content from '../content'

//storing data as static here, same can be fetched from API
const Content = [
    {
        name: 'Good leaders have good character',
        language: 'EN',
        image: './images/tiger.jpg',
        description: 'chapters'
      },
      {
        name: 'Chapter 2: Good leaders have good character',
        language: 'EN',
        image: './images/tiger.jpg',
        description: 'chapters'
      },
      {
        name: 'All about Sports',
        language: 'EN',
        image: './images/tiger.jpg',
        description: 'chapters'
      },
      {
        name: 'New Sports',
        language: 'EN',
        image: './images/tiger.jpg',
        description: 'chapters'
      }

  ];

const TigerHall = () => {

  const [search,setSearch] = useState('');

//   Debounce Implementation
  const updateSearch = e => setSearch(e?.target?.value);
  const debounceOnChange = debounce(updateSearch,300);

  return (
    <React.Fragment>
      <h1 className='text-center bg-gradient text-dark text-capitalize my-3'>Welcome to TigerHall Content</h1>
      <div className='text-center w-25'>
        <div className="text-center">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={debounceOnChange}></input>
        </div>
      </div>
      <hr/>
      <div className='container text-center'>
  <div className='row'>
    {/* implemeting search and filter functionality */}
    {
      Content.filter((item) => {
        return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search);
      })
      .map((elem) => {
        const {description,name,image} = elem;
        return(
            <>
          <div className='col'>
    <div className='card'>
  <img src={image} className='card-img-top' alt='...' height='200 px;'/>
  <div className='card-body'>
    <h5 className='card-title'>{description}</h5>
    <p className='card-text'>{name}</p>
  </div>
</div>
    </div>
    </>
        )
      })
    }
   
  </div>

</div>
    </React.Fragment>
  );
}

export default TigerHall;