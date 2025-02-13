import { createVNode, render } from 'vue'
import mConfirm from './index.vue'
const divNode = createVNode('div', { class: 'mzlui-confirm-container' })
render(divNode, document.body)
const container = divNode.el
const Confirm = ({ title, text,icon,confirmText,cancelText,confirmShow,cancelShow,closeShow,customClass }) => {
  document.body.style="overflow:hidden"
  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      resolve()
      render(null, container)
      document.body.style="overflow:initial"
    }
    const cancelCallback = () => {
      reject()
      render(null, container)
      document.body.style="overflow:initial"
    }
    const VNode = createVNode(mConfirm, { title, text,icon,confirmText,cancelText,confirmShow,cancelShow,closeShow,customClass,confirmCallback, cancelCallback })
    render(VNode, container)
  })
}
export default Confirm