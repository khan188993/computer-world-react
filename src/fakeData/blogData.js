const blogs = [
    {
        id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        title: "Context Api কি এবং কিভাবে কাজ করে?",
        img: "./assets/blogs/context-api.png",
        desc:`Context Api হচ্ছে  ReactJS এর State Management এর Props Driling করার জন্য ব্যবহৃত একটি Hook.  এটি ব্যবহার করে খুব সহজে State Data Manage করা যায়। React এ নোরমাল Way তে Props Driling এর জন্য Data component এ পাস করার জন্য Step By step pass করে করে আগাতে হয় যেমন মনে করি GrandFather নামে একটা Component আছে তার ভিতর একটি Father নামে Component বানালাম আবার Father component এর ভিতর Child নামে একটি Component বানালাম, এখন যদি আমরা GrandFather থেকে Child এ React এর নোরমাল Way তে DATA পাস করতে চাই তবে সেটার জন্য  ডাটা কে Father কে  মাধ্যম বানিয়ে Child এ পাঠাতে হবে এখানে Data Pass এর জন্য Father Component এর উপর Depend করা লাগছে কিন্তু Context Api এর ব্যবহার করলে কোন Component এর উপর Depend করা লাগবে না এটি দিয়ে সরাসরি Data pass করা যাবে Father to child বা GrandFather to Child Etc. এটি ব্যবহার এর জন্য GrandComponent(App.js) এর ভিতর একটি Hook import করতে হবে CreateContext নামে সেটা দিয়ে Context বানিয়ে Provider এর সাহায্যে যত Component আছে সবার কাছে ডাটা পাস করা যাবে সেগুলো আবার UseContext দিয়ে Retrieve করতে হবে। `
    },
    {
        id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        title: "Block || Inline || Inline-Block এদের মধ্যে Difference কি?",
        img: "./assets/blogs/display-inline.png",
        desc:`Block,Inline ও Inline-block এরা হচ্ছে CSS এর Display Property এর কিছু Values,Display Block করলে যে কোন Inline HTML TAG ব্লক ট্যাগ এ পরিণত হবে।  Block Tag গুলো সাধারণত Full Width নিয়ে কাজ করে থাকে।  Inline Tag সাধারণত তার কনটেন্ট এর Width নিয়ে কাজ কে করে , এটিতে CSS Property Margin Top/Bottom কাজ করে না, Inlnie-block হচ্ছে এমন একটি ভ্যালু যা Inline এর মতো তার Content এর Width নিয়ে কাজ করে আবার এটিতে Margin top/Bottom ব্যবহার করা যাই।  `,

    },
    {
        id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        title: "What is simentic tag ?",
        img: "./assets/blogs/simentic-tag.png",
        desc:`The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the <code> tag is immediately recognized by the browser as some type of coding language. some examples of symentic tags are [h1,p,li,ul,a,b etc]`,
        
    },

]

export default blogs;