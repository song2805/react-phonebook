import React from 'react'
import SearchWindow from './SearchWindow'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


const ContactLists = () => {


const {contactList, keyword} = useSelector(state=>state);
const [searchList, setSearchList] = useState([]);

useEffect(()=> {
  if (keyword !== '') {
    let list = contactList.filter((item) => item.name.includes(keyword));
    setSearchList(list);
  } else {
    setSearchList(contactList)
  }
},[contactList, keyword])

  return (
    <div>
      <SearchWindow />
      <div style={{margin: '10px'}}>
       Contact Total:{searchList.length}
      {searchList.map((item, index) => (<ContactItem item={item} key={index} />))}
      </div>
    </div>
  );
};

export default ContactLists
