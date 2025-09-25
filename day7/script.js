let x=401;
if(x<200){
    console.log('no charge');

}else if((x>=200)&&(x<=400)){
    y=x*5;
    console.log('y=',`${y}`);

}else if((x>=401)&&(x<=600)){
    y=x*7;
    console.log('y=',`${y}`);
}else{
    y=x*10;
    console.log('y=',`${y}`);
}