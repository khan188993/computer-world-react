const blogs = [
    {
        id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        title: "How Context API Works?",
        img: "./assets/blogs/context-api.png",
        desc:"the Context API helps to avoid prop drilling in our React application. if you don't know about the term prop drilling. So let's understand that first. ______________  In React, we can pass the data only in a single direction, i.e. from top to down (parent to child) via props. Prop drilling is a process where we need to pass down the props at each level in a deeply nested component tree so that we can access them in the component at the lowest level.  Context in React just provides a way to pass the data directly to the required components rather than passing them through every level of the component tree. So using React Context, we don't have to pass the props unnecessarily to all those intermediate components that do not need the   ",
    },
    {
        id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        title: "What is the different between block inline and inline-block tags?",
        img: "./assets/blogs/display-inline.png",
        desc:"Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain.For example, header, Footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose. Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.",
    },
    {
        id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        title: "What is simentic tag ?",
        img: "./assets/blogs/simentic-tag.png",
        desc:"Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain.For example, header, Footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose. Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.",
        
    },
    // {
    //     id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
    //     title: "Piaget",
    //     img: "./watches-images/watch-4.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "6e5593d3-557b-43cf-8dab-a5140faedfb0",
    //     title: "Cartier",
    //     img: "./watches-images/watch-5.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
       
    // },
    // {
    //     id: "9c0c13c2-54e4-4001-809b-afbd9d84037d",
    //     title: "Harry Winston",
    //     img: "./watches-images/watch-6.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
    //     title: "Blancpain",
    //     img: "./watches-images/watch-7.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
    //     title: "Longines",
    //     img: "./watches-images/watch-8.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "ac44095f-230e-4502-8816-dea3eaae8320",
    //     title: "ULTRABOOST 22 SHOES",
    //     img: "./watches-images/watch-9.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "d0803f97-966f-4296-ad31-a7f70fc86fab",
    //     title: "Zenith",
    //     img: "./watches-images/watch-10.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "8a5b4a9c-76ea-4fbb-9c70-9548de4eab01",
    //     title: "Tudor",
    //     img: "./watches-images/watch-11.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
        
    // },
    // {
    //     id: "b357e19b-4dd9-4fc7-b5c0-9ed5255464ba",
    //     title: "Omega",
    //     img: "./watches-images/watch-12.jpg",
    //     desc:"Buy the best watch from our shop.find a watch you never before.",
    // }
]

export default blogs;