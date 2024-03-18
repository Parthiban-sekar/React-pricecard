
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';

function App() {
  let priceCard =[

    {
      plan :"FREE",
      price :"0",
      features : [{
        name : "Single User",
        enabled :true
      },
      {
        name : "50GB Storage",
        enabled : true
      },
      {
        name :"Unlimited Public Projects",
        enabled : true
      },
      {
        name :"Community Access",
        enabled :true
      },
      {
        name :"Unlimited Private Projects",
        enabled : false
      },       
      {
        name :"Dedicated Phone Support",
        enabled :false
      },
      {
        name :"Free Subdomain",
        enabled : false
      },
      {
        name :"Monthly Status Reports",
        enabled : false
      }
     ]
    },

    {
      plan :"PLUS",
      price :"9",
      features : [{
        
        name : "Single User",
        enabled :true
      },
      {
        name : "50GB Storage",
        enabled :true
      },
      {
        name :"Unlimited Public Projects",
        enabled :true
      },
      {
        name :"Community Access",
        enabled :true
      },
      {
        name :"Unlimited Private Projects",
        enabled :true
      },       
      {
        name :"Dedicated Phone Support",
        enabled :true
      },
      {
        name :"Free Subdomain",
        enabled :true
      },
      {
        name :"Monthly Status Reports",
        enabled :false
      }
     ]
   },

    {
      plan :"PRO",
      price :"49",
      features : [{
        name : "Single User",
        enabled :true
      },
      {
        name : "50GB Storage",
        enabled :true
      },
      {
        name :"Unlimited Public Projects",
        enabled :true
      },
      {
        name :"Community Access",
        enabled :true
      },
      {
        name :"Unlimited Private Projects",
        enabled :true
      },       
      {
        name :"Dedicated Phone Support",
        enabled :true
      },
      {
        name :"Free Subdomain",
        enabled :true
      },
      {
        name :"Monthly Status Reports",
        enabled :true
      }
     ]
    },

  ]
  return (
    <div className='container'>
      <div className='row'>
       {
        priceCard.map((element,i)=>{
          return <Card data={element} key={i}/>
        } )
       }
    
    </div>
    </div>
  );
}

export default App;
