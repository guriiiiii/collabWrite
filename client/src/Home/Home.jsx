import { CiMenuBurger } from "react-icons/ci";
import profile from '../icons/profile.png';
import home from '../icons/docs-home.svg';
import { BsThreeDotsVertical } from "react-icons/bs";
import './home.css';
import api from "../config";
import { useRef, useState,useEffect } from "react";
import { v4 as uuidV4 } from 'uuid';
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import Row from "../Row/Row"

export default function Home (){
    const [active, setActive] = useState(false);
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const getDoc =async()=>{
            try{
                const doc = await api.get("docs/get/")
                setDocs(doc.data)
            }catch(err){
                console.log(err)
            }
            
        }
        getDoc();
    },[])
    console.log(docs);
    //const [name, setName] = useState("");
    const nameRef = useRef();
    const documentId = uuidV4();
    const handleCreate = async ()=>{
        const name = nameRef.current.value;
        const postData = async()=>{
            try {
                await api.post("docs/new", {name,documentId});
                } catch (err) {}
        }
        postData();
    }
    console.log(typeof(docs));
    return (
    <div>
        <div className="docsbar-container">
            <div className="docsbar-content">
            <CiMenuBurger className='menu-icon'/>
            <a href="https://docs.google.com/document/u/0/" target="blank">
                <img src={home} alt="Docsbar Menu" className="docsbar-logo" />
            </a>
            <div className="docsbar-header">
                <div className="docsbar-title">
                <h1>
                    Docs
                </h1>
                </div>
            </div>
            </div>
            <div className='searchBar'>
                <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
                <input
                    type="text"
                    placeholder="Search"
                    />
            </div>
            <div className="docsbar-footer">
            <a href="https://gurtegsingh.netlify.app" target="blank">
                <img src={profile} alt="Profile" className="profile" />
            </a>
            </div>
        </div>
        <div className='mid-section'>
            <p>Start a new document<span className='threeDots'><BsThreeDotsVertical/></span></p>
            <img src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" alt="Add" className="add-logo" onClick={()=>setActive(true)}/>
            <p>Blank</p>
        </div>
        {active?<div className="createSection">
            <div className="createBack">
                <input type="text" placeholder="Name" ref={nameRef} className="docInput"/>
                <div className="btnSection">
                    <button className="cancelBtn" onClick={()=>setActive(false)}>Cancel</button>
                    <Link to={`/documents/${documentId}`}><button className="createBtn" onClick={handleCreate}>Create</button></Link>
                </div>   
            </div>
        </div>:<div className="createSection" style={{display:"none"}}>
            <div className="createBack">
                <input type="text" placeholder="Name" ref={nameRef} className="docInput"/>
                <div className="btnSection">
                    <button className="cancelBtn" onClick={()=>setActive(false)}>Cancel</button>
                    <Link to={`/documents/${documentId}`}><button className="createBtn" onClick={handleCreate}>Create</button></Link>
                </div>   
            </div>
        </div>}
        <div className="padder">
            <div className="allDocuments">
                <div className="allDocHeader">
                    <h2>My Documents</h2>
                    <p>Date Created</p>
                    <FaFolder className="allDocIcon"/>
                </div>
            </div>
            <div className="rows">
                {docs.map((doc)=>(
                    <Row key ={doc._id} doc ={doc}/>
                ))}
            </div>
        </div>
    </div>
)}