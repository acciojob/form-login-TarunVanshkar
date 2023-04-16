function getFormvalue() {
    //Write your code here
	const input = document.getElementById("form1");
    const firstName = input.children[0].value;
    const lastName = input.children[2].value;
    let ans=firstName+" "+lastName;
    
    alert(ans);

}
