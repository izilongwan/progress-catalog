interface Option {
  contentEl: string
  catalogEl: string
  cool?: boolean
  linkClass?: string,                             // 所有目录项都有的类
  linkActiveClass?: string,                // active的目录项
  datasetName?: string,                  // 目录项DOM的attribute存放对应目录的id
  selector?: string[],   // 按优先级排序
  scrollWrapper?: HTMLElement,                              // 按优先级排序
  activeHook?: Function,                                 // 激活时候回调
  topMargin?: number,
  bottomMargin?: number,
}

interface Catalog {
  new(option: Option): any
}

export const Catalog: Catalog

export default Catalog
