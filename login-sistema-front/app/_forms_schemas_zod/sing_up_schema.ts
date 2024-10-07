"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function SingUpSchema() {
  const register = 1
  const handleSubmit = 2
  const [errors,setErrors] = useState(6)
  const apiError = 4
  const setApiError = 5
  return { register, handleSubmit, errors, apiError, setApiError };
};

export default SingUpSchema;
