import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Modal from 'react-modal';
import axios from 'axios'

export default function Product(props) {
	const [hover, setHover] = useState(false)
	const [name, setName] = useState(props.data.name)
	const [id, setId] = useState(props.data.id)
	const [_id] = useState(props.data._id)
	const [price, setPrice] = useState(props.data.price)
	const [tagList, setTaglist] = useState() //List of all tags from DB, used for checkboxes
	const [tags, setTags] = useState(props.data.tags) // Tags of current product
	const [productInfo, setProductInfo] = useState(props.data.productInfo)
	const [description, setDescription] = useState(props.data.description)

	const handleSubmit = (_id, name, price, id, productInfo, description, selectedTags) => {
        //console.log(_id, name, price, id, productInfo, description, selectedTags)
        axios.put('http://localhost:4000/api/products/put',{
            _id: _id,
            name: name,
            price: price,
            id: id,
            productInfo: productInfo,
            description: description,
            tags: selectedTags
		})
	}

	const createCheckBoxes = () => {
		// Creates checkboxes for all tags from DB, called on modal open.
		if (tagList) {
		let temp = []
			tagList.forEach(element => {
				temp.push(
					<>
						<label>{element.name}</label>
						<input type="checkbox" 
						key={element._id} 
						name={element.name} 
						defaultChecked={tags.includes(element._id)}
						onClick={() => handleCheckBox(element._id)} 
						/>
					</>
				)
			}
			)
			temp.push(<br />)
			return temp
		}
    }
	
	const handleCheckBox = (_id) => {
		if (tags.includes(_id)) {
			let tempTags = tags.filter(el => el !== _id)
			setTags(tempTags)

					}
		else {
						tags.push(_id)
			setTags(tags)

		}
    }
	
	if (!tagList && props.tags) {
		setTaglist(props.tags)
	}

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			position: 'absolute'
		}
	};

	const [modalIsOpen, setIsOpen] = React.useState(false);

	const openModal = () => {
		setIsOpen(true);
	}

	const closeModal = () => {
		setIsOpen(false);
	}

	if (props.data.tags && props.layout === false && tagList) {
		return (
			<Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<div onClick={openModal} style={{ backgroundColor: hover ? "#D2C6B8" : "" }}>
					<Row>
						<Col>
							<Image style={{ position: "relative", opacity: hover ? 40 + '%' : 100 + '%' }}
								src={require("../Media/kahvi")} fluid roundedCircle />
							<p style={{ color: "white", position: "absolute", top: 25 + '%', marginLeft: 25 + '%' }}>{hover ? "" : ""}</p>

						</Col>
						<Col>
							<p style={{ backgroundColor: "" }} >{props.data.name} </p>
							
							<Row>

		{props.data.tags.map((el, i) => { return(
		<Col md="auto" key={i} style={{ backgroundColor: "" }}>
				{tagList[tagList.findIndex(tagList => tagList._id === el)].name}
				</Col> )})}

							</Row>

							<p>{props.data.price}€ </p>
						</Col>
						<Col>
							{hover ? props.data.productInfo : ""} <br/>
							{hover ? props.data.description : ""}
						</Col>
					</Row>
				</div>

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Product">
						{createCheckBoxes()}
					<br/><label >Product name</label> <br/>
					<input onChange={e => setName(e.target.value)} name="name" placeholder="Name" type="text" defaultValue={name}  /><br />
					<br/><label >Price</label> <br/>
					<input onChange={e => setPrice(parseFloat(e.target.value))} name="price" placeholder="Price" type="text" defaultValue={props.data.price} /><br />
					<br/><label >Product ID</label> <br/>
					<input onChange={e => setId(e.target.value)} name="id" placeholder="Id" type="text" defaultValue={props.data.id} /><br />
					<br/><label>Product info</label><br/>
					<input onChange={e => setProductInfo(e.target.value)} name="productInfo" placeholder="Product Info" type="text" defaultValue={props.data.productInfo} /><br />
					<br/><label>Product Description</label><br/>
					<input onChange={e => setDescription(e.target.value)} name="description" placeholder="Description" type="text" defaultValue={props.data.description} /><br />
					<input onClick={() => handleSubmit(_id, name, price, id, productInfo, description, tags)} type="submit" value="Update" />
					<Button onClick={closeModal} >Close</Button>
				</Modal>

			</Container>
		)
	}
	else {
		return(
			<></>
		)
	}
}
/*
	if (props.layout === true) {

		// probably reconstruct products with both using container or none at all
		return (
			<div style={{ backgroundColor: hover ? "#D2C6B8" : "" }} className="col-4 justify-content-center"
				onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={props.data.key}>

				<Image style={{ position: "relative", opacity: hover ? 40 + '%' : 100 + '%' }}
					src={require("../Media/kahvi")} onClick={openModal} fluid roundedCircle />

				<p style={{ color: "white", position: "absolute", top: 25 + '%', marginLeft: 25 + '%' }}>{hover ? "Info" : ""}</p>
				<p>{props.data.name} </p>
				<p>{props.data.price}€</p>

				<Row>
					{hover ? props.data.tags.map(el => { return <Col key={el} md="auto"> {el} </Col> }) : ""}
				</Row>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Product">
					<Button onClick={closeModal} >takaisin</Button>
				</Modal>
			</div>
		)
	}
	*/