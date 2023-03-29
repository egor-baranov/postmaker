import React from 'react';
import clsx from 'clsx';
import {
    $getRoot,
    $getSelection,
    $isRangeSelection,
    FORMAT_TEXT_COMMAND,
    FORMAT_ELEMENT_COMMAND,
    UNDO_COMMAND,
    REDO_COMMAND,
} from 'lexical';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {mergeRegister} from '@lexical/utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faBold,
    faStrikethrough,
    faItalic,
    faUnderline,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faAlignJustify,
    faRotateLeft,
    faRotateRight
} from '@fortawesome/free-solid-svg-icons';

library.add(faBold, faStrikethrough, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faRotateLeft, faRotateRight)


export default function Toolbar() {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = React.useState(false);
    const [isItalic, setIsItalic] = React.useState(false);
    const [isStrikethrough, setIsStrikethrough] = React.useState(false);
    const [isUnderline, setIsUnderline] = React.useState(false);

    const updateToolbar = React.useCallback(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsStrikethrough(selection.hasFormat('strikethrough'));
            setIsUnderline(selection.hasFormat('underline'));
        }
    }, [editor]);

    React.useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({editorState}) => {
                editorState.read(() => {
                    updateToolbar();
                });
            })
        );
    }, [updateToolbar, editor]);

    return (
        <div
            className="fixed z-20 shadow bottom-8 left-1/2 transform -translate-x-1/2 min-w-52 h-10 px-2 py-2 bg-black mb-4 space-x-2 flex items-center rounded-xl">
            <button
                className={clsx(
                    'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in rounded',
                    isBold ? 'bg-gray-700' : 'bg-transparent'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-bold"
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in rounded',
                    isStrikethrough ? 'bg-gray-700' : 'bg-transparent'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-strikethrough"
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in rounded',
                    isItalic ? 'bg-gray-700' : 'bg-transparent'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-italic"
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 hover:bg-gray-700 transition-colors duration-100 ease-in rounded',
                    isUnderline ? 'bg-gray-700' : 'bg-transparent'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-underline"
                    className="text-white w-3.5 h-3.5"
                />
            </button>

            <span className="w-[1px] bg-gray-600 block h-full"></span>

            <button
                className={clsx(
                    'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in rounded'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-align-left"
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in rounded'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-align-center"
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in rounded'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-align-right"
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in rounded'
                )}
                onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-align-justify"
                    className="text-white w-3.5 h-3.5"
                />
            </button>

            <span className="w-[1px] bg-gray-600 block h-full"></span>

            <button
                className={clsx(
                    'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in rounded'
                )}
                onClick={() => {
                    editor.dispatchCommand(UNDO_COMMAND, 'undo');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-rotate-left"
                    style={{color: "#ffffff",}}
                    className="text-white w-3.5 h-3.5"
                />
            </button>
            <button
                className={clsx(
                    'px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in rounded'
                )}
                onClick={() => {
                    editor.dispatchCommand(REDO_COMMAND, 'redo');
                }}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-rotate-right"
                    style={{color: "#ffffff",}}
                    className="text-white w-3.5 h-3.5"
                />
            </button>
        </div>
    );
};
