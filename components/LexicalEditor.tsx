import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {mergeRegister} from '@lexical/utils';
// @ts-ignore
import Toolbar from './plugins/ToolbarPlugin';
import {css} from '@emotion/css'
import {SELECTION_CHANGE_COMMAND} from 'lexical';
import {$getRoot, $getSelection} from "lexical";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {selector} from "postcss-selector-parser";
import {SetStateAction, useCallback, useRef, useState} from "react";
import {useTextSelection} from "./utils/text_selection";


type LexicalEditorProps = {
    config: Parameters<typeof LexicalComposer>['0']['initialConfig'];
};

function onChange(state: any) {
    state.read(() => {
        const root = $getRoot();
        const selection = $getSelection();

        console.log(selection);
    });
}


export const LexicalEditor = (props: LexicalEditorProps) => {
    const [target, setTarget] = useState<HTMLElement>()

    const ref = useCallback((el: SetStateAction<HTMLElement | undefined> | null) => {
        if (el != null) {
            setTarget(el)
        } else {
            setTarget(undefined)
        }
    }, [])

    const {clientRect, isCollapsed} = useTextSelection(target)


    return (
        <LexicalComposer initialConfig={props.config}>
            <div className="editor-container">
                <div className="editor-inner">
                    {clientRect != null && !isCollapsed ?
                        <div className={css`
                          position: absolute;
                          left: ${clientRect!!.left + clientRect!!.width / 2 - 108}px;
                          top: ${clientRect!!.y - 210}px;
                        `}><Toolbar/></div> : <div/>}

                    <div ref={ref}>
                        <RichTextPlugin
                            contentEditable={<ContentEditable/>}
                            placeholder={<Placeholder/>}
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                    </div>
                </div>
            </div>
            <OnChangePlugin onChange={onChange}/>
            <HistoryPlugin/>
        </LexicalComposer>
    );
}

const Placeholder = () => {
    return (
        <div className="absolute top-0 m-4 opacity-50 text-xl font-light">
            Content
        </div>
    );
};

export function Editor() {
    return (
        <div
            id="editor-wrapper"
            className={
                'relative prose prose-slate prose-p:my-0 prose-headings:mb-4 prose-headings:mt-2'
            }
        >
            <LexicalEditor
                config={{
                    namespace: 'lexical-editor',
                    theme: {
                        root: 'p-4 text-2xl font-light border-slate-500 bg-gray-50 border-0 rounded h-full min-h-[200px] focus:outline-none rounded-2xl',
                        link: 'cursor-pointer',
                        text: {
                            bold: 'font-semibold',
                            underline: 'underline',
                            italic: 'italic',
                            strikethrough: 'line-through',
                            underlineStrikethrough: 'underlined-line-through',
                        },
                    },
                    onError: error => {
                        console.log(error);
                    },
                }}
            />
        </div>
    );
}