import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // add dateOfUpload and userUpload whom is connected to system 
    this.recipeForm = this.fb.group({
      imageFile: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      secodaryCategory: ['', Validators.required],
      mainCategory: ['', Validators.required],
      preparationTime: ['', Validators.required],
      cookingTime: ['', Validators.required],
      numberOfPortions: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
      tags: this.fb.array([]),
      remarks: this.fb.array([])
    })
  }

}
