/**
 ** MODULE NAME: 
 **	  Junction.js
 **
 ** DESCRIPTION:
 **   Define the properties and methods of the junction element of the state machine diagram of UML 2.
 **
 ** DEVELOPED BY:
 **   Alejandro Arrabal Hidalgo (AAH)
 **   Rafael Molina Linares (RML)
 **
 ** SUPERVISED BY:
 **		Jos� Ra�l Romero, PhD (Associate Professor, University of C�rdoba, Spain)
 **
 ** HISTORY:
 **     001 - Oct 2012 - AAH - Third version release
 ** 	000 - Sep 2011 - RML - Second version release
 **
 ** CONTACT INFO:
 ** 	Jos� Ra�l Romero, http://www.jrromero.net
 **
 ** NOTES:
 **
 ** LICENSE & DISCLAIMER:
 **    Copyright (C) 2011 The authors
 **
 **    This program is free software: you can redistribute it and/or modify
 **    it under the terms of the GNU General Public License as published by
 **    the Free Software Foundation, either version 3 of the License, or
 **    (at your option) any later version.
 **
 **    This program is distributed in the hope that it will be useful,
 **    but WITHOUT ANY WARRANTY; without even the implied warranty of
 **    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 **    GNU General Public License for more details.
 **
 **    You should have received a copy of the GNU General Public License
 **    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **
**/



/**
 * Junction class constructor, creates a junction in the state machine diagram
 *
 * @author Rafael Molina Linares
 * @update 16/10/2011
 *
 * @class Junction
 * @extends Elliptical
 *
 */
var Junction = function( params ) {

  params = params || {};
  Junction.baseConstructor.call(this,params);
}
JSFun.extend(Junction,Elliptical);


/**
 * Adds new item to the stereotype fields component of the element UML
 *
 * @author Rafael Molina Linares
 * @update 16/10/2011
 *
 * @method addStereotype
 * @param {String} text Text that will contain the new field of the stereotype component
 *
 */
Junction.prototype.addStereotype = function(text){
	var text = text || '';
	this._components[0].addField( '\xAB' + text + '\xBB' );
}


/**
 * Set the name of the element UML
 *
 * @author Rafael Molina Linares
 * @update 16/10/2011
 *
 * @method setName
 * @param {String} text Text to establish the new name
 *
 */
Junction.prototype.setName = function( text ){
	this._components[1].setValue( text );
}


/**
 * Return the stereotypes of the element UML in array's form
 *
 * @author Rafael Molina Linares
 * @update 18/11/2011
 *
 * @method getStereotypes
 * @return {Array} Array with the stereotypes components of the element
 *
 */

Junction.prototype.getStereotypes = function( ){
	return	this._components[0]._childs;
}


/**
 * Returns the name of the element UML
 *
 * @author Rafael Molina Linares
 * @update 18/11/2011
 *
 * @method getName
 * @return {String} Text of the element's name
 *
 */
Junction.prototype.getName = function( ){
	return this._components[1].getValue();
}



/**
 * Returns the stereotype fields component of the element UML
 *
 * @author Rafael Molina Linares
 * @update 16/10/2011
 *
 * @method getStereotype
 * @return {Component} Stereotype fields components of the element UML
 *
 */
Junction.prototype.getStereotype = function(){		
	return this._components[0];
}




/**
 * Returns the name field component of the element UML
 *
 * @author Alejandro Arrabal Hidalgo
 * @update 22/09/2012
 *
 * @method getNameAsComponent
 * @return {Component} Stereotype field component of the element UML
 *
 */
Junction.prototype.getNameAsComponent = function( ){
	return this._components[1];
}