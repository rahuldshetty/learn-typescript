
// Install React dependencies
// bun install react@latest react-dom@latest
// bun install --save-dev @types/react@latest @types/react-dom@latest
const Component1 = (props: {message: string}) => {
    return (
        <body>
            <h1 style={{color:'red'}}>{props.message}</h1>
        </body>
    );
}

function Component2(props: {message: string}){
    return (
        <body>
            <h1 style={{color:'red'}}>{props.message}</h1>
        </body>
    );
}

console.log(<Component1 message="Hello World1"/>);
console.log(<Component2 message="Hello World2"/>);
