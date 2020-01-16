import { Component, OnInit } from "@angular/core";
import EditorJS from "@editorjs/editorjs";

@Component({
    selector: "ns-editor",
    templateUrl: "./editor.component.html"
})
export class EditorComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // const editor = new EditorJS('codex-editor');
    }
}
