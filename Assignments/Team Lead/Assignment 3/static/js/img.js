// window.watsonAssistantChatOptions = {
//     integrationID: "46f8bb85-8edd-44e1-bd38-46698f6d272c", // The ID of this integration.
//     region: "us-south", // The region your integration is hosted in.
//     serviceInstanceID: "f0e03510-f198-4fa8-a111-86f1a4f21a35", // The ID of your service instance.
//     onLoad: function(instance) { instance.render(); }
//   };
//   setTimeout(function(){
//     const t=document.createElement('script');
//     t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
//     (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
//     document.head.appendChild(t);
//   });

window.watsonAssistantChatOptions = {
    integrationID: "df70c1ef-da13-4ecf-937f-940f243d3d86", // The ID of this integration.
    region: "jp-tok", // The region your integration is hosted in.
    serviceInstanceID: "616b3629-960b-4da9-9d60-3b63268dd649", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
    (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});


// window.watsonAssistantChatOptions = {
//     integrationID: "5662b8d5-6e03-4ed1-b8a9-36cef43ef236", // The ID of this integration.
//     region: "us-south", // The region your integration is hosted in.
//     serviceInstanceID: "7e76d93b-cfe4-4370-993d-1ce3ecc6df02", // The ID of your service instance.
//     onLoad: function(instance) { instance.render(); }
//   };
//   setTimeout(function(){
//     const t=document.createElement('script');
//     t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + 
//     (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
//     document.head.appendChild(t);
//   });