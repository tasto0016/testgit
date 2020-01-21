
/**
* ecran, permet de manipuler un ecran
*
*@constructor
*/
function ecran(){
	
	this._ecran = obtenirEcranCourant();
	/**
	*Donne le libellé de cet écran
	*
	*/
	function obtenirLibelle(){
		
	};
	
	/**
	*Ecrit dans champs valeur
	*
	*@param {champ} champ - le champ ou il faut écrire
	*@param {String/Number} valeur - valeur à écrire
	*/
	function ecrire(champ, valeur){
		champ.ecrire(valeur);
	};
	
	/**
	*Ecrit dans le champ spécifié par son libellé
	*
	*@param {String} libelleChamp - libelle du champ où écrire 
	*@param {String/Number} valeur - valeur à écrire
	*/
	function ecrireChamp(libelleChamp, valeur){
		var champ = this.rechercheChamp(libelleChamp);
		champ.ecrire(valeur);
	};
	
	/**
	*renvoie le champs précisé par son libellé
	*
	*@param {String} libelleChamp - libellé du champ à séléctionner
	*
	*@return {champ} champ cherché
	*/
	function rechercheChamp(libelleChamp){
		
	};
	
	/**
	*Permet d'avoir un champs en fonction de la position d'un autre champs
	*
	*@param {champ} champ - champ de départ
	*@param {direction} direction - direction depuis champ de départ
	*
	*@return {champ} champ d'arrivé
	*/
	function rechercheChampRelatif(champ, direction){
		
	};
	
	/**
	*Renvoie le bouton spécifié par son liebellé
	*
	*@param {String} libelleBouton - spécifié pour trouver le bouton
	*
	*@return {bouton} retourne le bouton trouvé
	*/
	function rechercheBouton(libelleBouton){
		
	};
	
	/**
	*Selectionne une valeur dans un combo
	*
	*@param {String} libelleCombo - libellé du combo
	*@param {String} valeur - valeur à séléctionner
	*/
	function selectCombo(libelleCombo, valeur){

	};	
	
	
	/**
	*Lit l'élélement spécifié
	*
	*@param {String} libelle - qui spécifie l'élémenet à lire
	*
	*@return {String} la valeur comprise dans l'élément lu
	*/
	function lire(libelle){
		
	};
	
	/**
	*Lit le champs spécifié
	*
	*@param {String} libelle - du champs spécifié
	*
	*@return {String} valeur contenue dans le champ
	*/
	function lireChamp(libelle){
		var champ = this.rechercheChamp(libelle)
		return champ.lire();
	};
	
	/**
	*Appliquer la fenêtre
	*
	*/
	function appliquer(){
		
	};
	
	/**
	*Ferme la fenêtre
	*
	*/
	function fermer(){
		
	};
	
}