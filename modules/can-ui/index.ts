import type { App } from 'vue';
import Transfer from './Transfer/Transfer.vue';
interface ObjectType{
    [propName: string]: any;
}
const components:ObjectType={
    Transfer,
}

export default {
    install(app:App){
        for(let component in components){
            app.component(component,components[component as keyof ObjectType]);
        }
    }
}