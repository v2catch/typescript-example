export default () => {
    

    {   
        /***
         * Operator '+' cannot be applied to types 'never[]' and 'never[]'.
         * Operator '+' cannot be applied to types '{}' and 'never[]'.
         **/
        let foo1 = [] + [];
        let foo2 = [] + {};
        let foo3 = {} + [];
        let foo4 = {} + {};
  
        const foo5: number[] = [4,5,6,7];
        const foo6: number[] = [6,7,8,9];

        /* Operator '+' cannot be applied to types 'number[]' and 'number[]'. */
        const bar = foo5 + foo6;
    }

    {    
        /* Implicitly sets the type to (string | number)[] */
        const foo1 = [3, 'bar'];
        /* Type 'string' is not assignable to type 'number'. */
        const foo2:number[] = [3, "bar"];
        /* redundant */
        const a5:(number|string)[] = [3, "bar"];
    }

    {
        /* runtime issues still occur as it compiles to javascript */
        const foo:string[] = [];
        console.log(foo[3]);     /* → "undefined" // No array bounds exception??? */
        foo[3] = 'bar';           
        console.log(foo.length); /* → 4 // 4??? Only one element has been added! */

        /* Element implicitly has an 'any' type because index expression is not of type 'number' */
        console.log(foo["3"]);
    }


    {
        let foo = 1;

        /* nope */
        /* Type 'string' is not assignable to type 'number' */
        foo = foo + "";

        /* This is fine as we couldnt do  `foo = foo + ""` */
        foo + 1;
    }

    



};