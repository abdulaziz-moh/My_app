import './Tools.css';
import govgidelogo from './assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowDown91, faArrowDownAZ, faCaretDown, faCircle, faCircleQuestion, faHouse, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NavBar(){
    return(
        <div className='nav-bar'>
           <img src='#' alt='logo here'/>
           <div className='icons'>
                <FontAwesomeIcon icon={faHouse}/> 
                <FontAwesomeIcon icon={faSearch}/>
           </div>
        </div>
    )

}

function ProductCard({title,price,isAvailable}){
    const [availableity,changeStatus] = useState(isAvailable)
    function change(){
        if (availableity){
            changeStatus(false)
        }
        else{
            changeStatus(true)
        }
    }
    return(
        <>
        <div className='product-card'>
            <h2>Product: {title}</h2>
            <h4>Price: {price} </h4>
            <h4>{availableity? "In Stock":"Out Of Stock"}</h4>
            <button onClick={change}>click me to change status</button>
        </div>   
        </>
    )
}

function ParentCard(){
    return(
        <>
        <div className='parent-cards'>
            <ProductCard  title="T-Shirt" price={1000} isAvailable={true} />
            <ProductCard  title="Trouser" price={2000} isAvailable={false} />
            <ProductCard  title="Hat" price={500} isAvailable={false} />
            <ProductCard  title="Hat" price={500} isAvailable={false} />
            <ProductCard  title="Hat" price={500} isAvailable={false} />
        </div>
        </>
    )

}

const teamData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Passionate about UI/UX and building responsive web applications."
  },
  {
    id: 2,
    name: "Mark Smith",
    role: "Project Manager",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Expert in agile methodologies and keeping teams on track."
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "UI Designer",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Loves creating intuitive designs and user-friendly interfaces."
  }
];

function MemberCard({ name, role, photo, bio }){
    return (
    <div className="member-card">
      <img src={photo} alt={`${name}'s profile`} className="member-photo" />
      <h3 className="member-name">{name}</h3>
      <h4 className="member-role">{role}</h4>
      <p className="member-bio">{bio}</p>
    </div>
  );
}

const Team = () => {
  return (
    <div className="team-container">
      {teamData.map((member) => (
        <MemberCard
          key={member.id}
          name={member.name}
          role={member.role}
          photo={member.photo}
          bio={member.bio}
        />
      ))}
    </div>
  );
};


export {NavBar,ProductCard,ParentCard,Team}