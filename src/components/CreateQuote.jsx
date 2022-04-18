import Axios from 'axios';
import React, { useState } from 'react'
import './CreateQuote.css'
function CreateQuote(props) 
{
 
const[form,setForm]=useState(
    {AircraftType:'Jet',Price:0.00,ProviderNotes:'',NoStops:0,AddPassenger:0,traveldate:'',DurationHour:'',DurationMin:'',RTRN:false,GroundTransport:false}
    );
 
 const handleFormSubmit=(e)=>
 {
    e.preventDefault(); 
    let inputParams=[];
    let reqId={'requestId':props.requestId};
    console.log('Form Submit' + JSON.stringify(form));
    inputParams.push(form);
    inputParams=[...inputParams,reqId ];
    console.log('Final Data:' + JSON.stringify(inputParams));
    //let final=[...form,45];
    //console.log('final:' + final);
    const POST_URL='https://crmapay-developer-edition.na213.force.com/InteractPay/services/apexrest/MedviationAuthorization?methodType=POST&inputParams=' + JSON.stringify(inputParams);
   console.log('URL:' + POST_URL);
    // Axios.post(POST_URL).then(res=>console.log('Posting Data:'+res)).catch(err=>console.log('Error:' + err));
 }
 const onChange=(e)=>{
    
    
     const {value,name,type,checked}=e.target;
     setForm((state) =>({...state,[name]:type==='checkbox' ? checked :value}));
     
     //console.log('Final Data:' + JSON.stringify(inputParams));
 }

  return (
    <div className="CreateQuote">
    <form onSubmit={handleFormSubmit}>
    <label> Aircraft Type
        <div>
          <input type="radio" name="AircraftType" value="Jet" onChange={onChange} />Jet &nbsp;&nbsp;
          <input type="radio" name="AircraftType" value="Turbo" onChange={onChange} />Turbo&nbsp;&nbsp;
          <input type="radio" name="AircraftType" value="Prop" onChange={onChange} />Prop
        </div>
        
    </label>
    <br></br>
    
    <label> No of Stops
        <select name="NoStops" onChange={onChange} value={form.NoStops}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
        </select>
    </label>
    <br/>
   
    <label >Travel Date :

        <input type="datetime-local" name="traveldate" onChange={onChange} value={form.traveldate} />
       
    </label>
    <br/>
    
    <label> Duration Hour
        
        <select name="DurationHour" onChange={onChange} value={form.DurationHour}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
        </select>
    </label>
    <br/>
    <label> Duration Min
        
        <select name="DurationMin" onChange={onChange} value={form.DurationMin}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
            <option>46</option>
            <option>47</option>
            <option>48</option>
            <option>49</option>
            <option>50</option>
            <option>51</option>
            <option>52</option>
            <option>53</option>
            <option>54</option>
            <option>55</option>
            <option>56</option>
            <option>57</option>
            <option>58</option>
            <option>59</option>
            

        </select>
    </label>
    <br/>
    <label> Additional Passenger
        <select name="AddPassenger" onChange={onChange} value={form.AddPassenger}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
        </select>
    </label>
  <br/>
    <label> 
        Price
        <input type="number" name="Price" onChange={onChange} value={form.Price} min="0" required />
           
    </label>
   
    <label> RTRN
        <input  type="checkbox" name="RTRN" onChange={onChange} value={form.RTRN}></input>
    </label>
    <br/>
    <label> Ground Transport
        <input  type="checkbox" name="GroundTransport" onChange={onChange} value={form.GroundTransport}></input>
    </label>
    <br></br>
    <label> Provider Notes
        <textarea name="ProviderNotes" onChange={onChange} value={form.ProviderNotes}></textarea>
    </label>
    <br></br>
    <div>
    <button className="CreateQuoteButton">Create Quote</button>
    </div>
   
    </form>
    </div>
  )
}

export default CreateQuote
