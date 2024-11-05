// vitePlugin.js
const customPlugin = () => {
    return {
        name: 'custom-plugin',
        transformIndexHtml(html) {
            return html.replace(
                '</head>',
                `<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script>LA.init({id:"KcaFSeikH95XOW2M",ck:"KcaFSeikH95XOW2M"})</script></script></head>`
            );
        },
    };
};

export default customPlugin;