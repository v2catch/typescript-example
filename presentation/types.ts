


{
  /** *
     * Operator '+' cannot be applied to types 'never[]' and 'never[]'.
     * Operator '+' cannot be applied to types '{}' and 'never[]'.
     * */
  const foo1 = [] + [];
  const foo2 = [] + {};
  const foo3 = {} + [];
  const foo4 = {} + {};

  const foo5: number[] = [4, 5, 6, 7];
  const foo6: number[] = [6, 7, 8, 9];

  /* Operator '+' cannot be applied to types 'number[]' and 'number[]'. */
  const bar = foo5 + foo6;
}

{
  /* Implicitly sets the type to (string | number)[] */
  const foo1 = [3, 'bar'];
  /* Type 'string' is not assignable to type 'number'. */
  const foo2:number[] = [3, 'bar'];
  /* redundant */
  const a5:(number|string)[] = [3, 'bar'];
}

{
  /* runtime issues still occur as it compiles to javascript */
  const foo:string[] = [];
  console.log(foo[3]);     /* → "undefined" // No array bounds exception??? */
  foo[3] = 'bar';
  console.log(foo.length); /* → 4 // 4??? Only one element has been added! */

  /* Element implicitly has an 'any' type because index expression is not of type 'number' */
  console.log(foo['3']);
}


{
  let foo = 1;

  /* nope */
  /* Type 'string' is not assignable to type 'number' */
  foo += '';

  /* This is fine as we couldnt do  `foo = foo + ""` */
  foo + 1;
}

{
  type Second = number | string;
  let time: Second = 42;
  let time1: number = time;
  let time2: Second = "42";
  let time3: number = time2;
}

{
  let x: (number | null) = 3;

  x = null;
}


{

  interface OtherChannel {
    title: string;
  }
  
  //declaration merging
  interface OtherChannel {
    description: string;
    transform(desc:string):string
  }
  
  //extending
  interface Channel extends OtherChannel {
    description2?: string;
  }


  const getFirstItem = <T>(arg: T[]): T => {
    return arg[0];
  }
  
  const channels: Channel[] = [
    {
      title: 'blah',
      description: 'blah',
      description2: 'blah',
      transform: (desc: string) => desc + 'a',
    },
    {
      title: 'blah',
      description: 'blah',
      description2: 'blah',
      transform: (desc: string) => desc + 'a',
    },
  ]
  
  const channel = getFirstItem<Channel>(channels);

  channel.description2
} 