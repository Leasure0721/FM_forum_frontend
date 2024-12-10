import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import styles from './index.less'

const FMEditor = () => {
    const [editor, setEditor] = useState(null)
    const [html, setHtml] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setHtml('')
        },1500)
    },[])

    const toolbarConfig = {}

    toolbarConfig.excludeKeys = [
        'fullScreen'
    ]

    const editorConfig ={
        placeholder: '可以是一句话也可以是一长段文章，看你怎么写，点击开始创作',
    }

    useEffect(() => {
        return () => {
            if(editor==null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <>
            <div style={{ zIndex: 100,maxWidth:'1400px',width:'1400px',border:'2px solid #FF6B6B'}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '0 0 0 2px solid #FF6B6B' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ minHeight: '55px'}}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {console.log(html)}
            </div>
        </>
    )
}


export default FMEditor